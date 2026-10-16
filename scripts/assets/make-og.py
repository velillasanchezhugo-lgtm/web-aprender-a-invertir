"""Genera public/og-default.png (1200x630) con la identidad de umotion Academy. Uso: npm run og"""
from PIL import Image, ImageDraw, ImageFont
W, H = 1200, 630
im = Image.new('RGB', (W, H), '#080a14')
d = ImageDraw.Draw(im)
# Halo cian en la esquina
halo = Image.new('L', (W, H), 0)
hd = ImageDraw.Draw(halo)
for r in range(420, 0, -6):
    hd.ellipse([W - 260 - r, -120 - r, W - 260 + r, -120 + r], fill=int(60 * (1 - r / 420)))
im.paste(Image.new('RGB', (W, H), '#35c8ff'), (0, 0), halo)
d = ImageDraw.Draw(im)
for x in range(0, W, 28):
    for y in range(0, H, 28):
        d.point((x, y), fill='#1a2036')
logo = Image.open('scripts/assets/umotion-logo-claro.png').convert('RGBA')
logo = logo.resize((322, 80), Image.LANCZOS)
im.paste(logo, (80, 80), logo)
mono = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf', 24)
d.rounded_rectangle([420, 98, 590, 142], radius=22, outline='#a3acc4', width=2)
d.text((441, 106), 'ACADEMY', font=mono, fill='#e1e6f0')
bold = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 76)
d.text((80, 230), 'Aprende a invertir', font=bold, fill='#f8f9fc')
d.text((80, 320), 'en ', font=bold, fill='#f8f9fc')
w = d.textlength('en ', font=bold)
d.text((80 + w, 320), '5 minutos', font=bold, fill='#35c8ff')
w2 = d.textlength('en 5 minutos', font=bold)
d.text((80 + w2, 320), ' al día.', font=bold, fill='#f8f9fc')
sans = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 30)
d.text((80, 460), 'Sesiones cortas · tests interactivos · plan según tu objetivo · gratis', font=sans, fill='#a3acc4')
im.save('public/og-default.png', optimize=True)
