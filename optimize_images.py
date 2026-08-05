from PIL import Image
import os

base = r"C:\Users\kushal\portfolio\public\images"
images = ["data-topography.png", "systems-sculpture.png"]

for img_name in images:
    path = os.path.join(base, img_name)
    if not os.path.exists(path):
        print(f"Missing: {path}")
        continue
    
    img = Image.open(path)
    # Convert to RGB if RGBA (remove alpha for smaller size)
    if img.mode in ("RGBA", "P"):
        rgb_img = Image.new("RGB", img.size, (17, 19, 15))  # match dark canvas
        if img.mode == "RGBA":
            rgb_img.paste(img, mask=img.split()[3])
        else:
            rgb_img.paste(img)
        img = rgb_img
    
    # Resize to reasonable max dimensions
    max_dim = 1200
    if max(img.size) > max_dim:
        ratio = max_dim / max(img.size)
        new_size = (int(img.size[0] * ratio), int(img.size[1] * ratio))
        img = img.resize(new_size, Image.LANCZOS)
    
    # Save as WebP with good quality
    webp_path = os.path.join(base, img_name.replace(".png", ".webp"))
    img.save(webp_path, "WEBP", quality=82, method=6)
    
    # Also save optimized PNG
    png_path = os.path.join(base, img_name.replace(".png", "-opt.png"))
    img.save(png_path, "PNG", optimize=True)
    
    orig_size = os.path.getsize(path)
    webp_size = os.path.getsize(webp_path)
    png_size = os.path.getsize(png_path)
    
    print(f"{img_name}: orig={orig_size/1024:.0f}KB, webp={webp_size/1024:.0f}KB ({100*(1-webp_size/orig_size):.0f}% smaller), opt_png={png_size/1024:.0f}KB")

print("Done")
