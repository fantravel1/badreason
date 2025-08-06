const fs = require('fs');
const path = require('path');

// Path to the Red Herring page (our template)
const templatePath = path.join(__dirname, '..', 'fallacies', 'fallacy-red-herring.html');

// Directory containing all fallacy pages
const fallaciesDir = path.join(__dirname, '..', 'fallacies');

// Read the template
const template = fs.readFileSync(templatePath, 'utf-8');

// Get all fallacy HTML files except the template
const files = fs.readdirSync(fallaciesDir)
  .filter(file => file.startsWith('fallacy-') && file.endsWith('.html') && file !== 'fallacy-red-herring.html');

// Function to extract the main content from a page
function extractMainContent(html) {
  // Extract the content between the opening and closing main tags
  const mainContentMatch = html.match(/<main[\s\S]*?<\/main>/i);
  return mainContentMatch ? mainContentMatch[0] : '';
}

// Function to extract the sidebar content from a page
function extractSidebarContent(html) {
  // Extract the content between the opening and closing aside tags
  const sidebarMatch = html.match(/<aside[\s\S]*?<\/aside>/i);
  return sidebarMatch ? sidebarMatch[0] : '';
}

// Function to extract the page metadata
function extractPageMetadata(html) {
  const metadata = {
    title: '',
    description: ''
  };
  
  // Extract title
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  if (titleMatch) {
    metadata.title = titleMatch[1].trim();
  }
  
  // Extract meta description
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"]*?)["']/i);
  if (descMatch) {
    metadata.description = descMatch[1].trim();
  }
  
  return metadata;
}

// Function to update a fallacy page
function updateFallacyPage(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    
    // Read the existing page
    const pageContent = fs.readFileSync(filePath, 'utf-8');
    
    // Extract the necessary content from the existing page
    const mainContent = extractMainContent(pageContent);
    const sidebarContent = extractSidebarContent(pageContent);
    const metadata = extractPageMetadata(pageContent);
    
    if (!mainContent || !sidebarContent) {
      console.warn(`  Could not extract all content from ${filePath}`);
      return false;
    }
    
    // Create a backup of the original file
    const backupPath = `${filePath}.bak`;
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath);
      console.log(`  Created backup at ${backupPath}`);
    }
    
    // Replace the main content and sidebar in the template
    let updatedContent = template;
    
    // Update the title and meta description
    updatedContent = updatedContent.replace(
      /<title>[\s\S]*?<\/title>/i, 
      `<title>${metadata.title}</title>`
    );
    
    updatedContent = updatedContent.replace(
      /<meta\s+name=["']description["']\s+content=["'][^"]*?["']/i, 
      `<meta name="description" content="${metadata.description}"`
    );
    
    // Replace the main content
    updatedContent = updatedContent.replace(
      /<main[\s\S]*?<\/main>/i, 
      mainContent
    );
    
    // Replace the sidebar content
    updatedContent = updatedContent.replace(
      /<aside[\s\S]*?<\/aside>/i, 
      sidebarContent
    );
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log(`  Updated: ${filePath}`);
    return true;
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return false;
  }
}

// Process all fallacy pages
console.log('Starting standardization of fallacy pages...');
let successCount = 0;
let failCount = 0;

files.forEach(file => {
  const filePath = path.join(fallaciesDir, file);
  const success = updateFallacyPage(filePath);
  
  if (success) {
    successCount++;
  } else {
    failCount++;
  }
});

console.log('\nStandardization complete!');
console.log(`- Successfully updated: ${successCount} files`);
console.log(`- Failed to update: ${failCount} files`);
console.log('\nNote: Backup files have been created with .bak extension');
