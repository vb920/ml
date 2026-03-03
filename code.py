import os
import glob
import re
from PIL import Image

# This helps sort the files naturally (so Page_2 comes before Page_10)
def natural_keys(text):
    return [int(c) if c.isdigit() else c for c in re.split(r'(\d+)', text)]

# Find all the images starting with "Document_Page_"
image_files = glob.glob("Document_Page_*.png")
image_files.sort(key=natural_keys)

if not image_files:
    print("No images found in this folder.")
else:
    print(f"Found {len(image_files)} images. Combining into PDF...")
    
    # --- NEW: Figure out the next available PDF filename ---
    existing_pdfs = glob.glob("*.pdf")
    max_num = 0
    for pdf in existing_pdfs:
        # Check if the file is named exactly like "1.pdf", "12.pdf", etc.
        match = re.match(r'^(\d+)\.pdf$', pdf)
        if match:
            num = int(match.group(1))
            if num > max_num:
                max_num = num
                
    next_pdf_num = max_num + 1
    pdf_filename = f"{next_pdf_num}.pdf"
    print(f"Saving as: {pdf_filename}...")
    
    # Open the first image and convert it to RGB (required for PDF)
    first_image = Image.open(image_files[0]).convert('RGB')
    
    # Open the rest of the images
    rest_of_images = [Image.open(f).convert('RGB') for f in image_files[1:]]
    
    # Save them all into the newly named PDF
    first_image.save(pdf_filename, save_all=True, append_images=rest_of_images)
    
    print(f"✅ {pdf_filename} created successfully!")
    
    # --- Cleanup phase ---
    print("🧹 Cleaning up original image files...")
    
    # Close the image files in Python's memory before the OS lets us delete them
    first_image.close()
    for img in rest_of_images:
        img.close()

    # Loop through and delete each file
    for file in image_files:
        try:
            os.remove(file)
            print(f"Deleted: {file}")
        except Exception as e:
            print(f"❌ Could not delete {file}: {e}")
            
    print("✨ All done! Your folder is clean.")
