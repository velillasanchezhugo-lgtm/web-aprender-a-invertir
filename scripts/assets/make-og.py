"""Genera public/og-default.png (1200x630) con la identidad provisional. Ejecutar: python3 scripts/assets/make-og.py"""
from PIL import Image, ImageDraw, ImageFont
W, H = 1200, 630
im = Image.new('RGB', (W, H), '#fbf9f4')
d = ImageDraw.Draw(im)
serif = '/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf'
sans = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
d.rounded_rectangle([90, 90, 250, 250], radius=40, fill='#0f4c5c')
d.arc([118, 118, 222, 222], start=40, end=320, fill='#fbf9f4', width=16)
d.line([166, 170, 222, 170], fill='#c8892b', width=16)
d.text((290, 105), 'Criterio', font=ImageFont.truetype(serif, 110), fill='#1b1f23')
d.text((95, 330), 'Aprende a invertir con criterio propio', font=ImageFont.truetype(serif, 48), fill='#1b1f23')
d.text((95, 420), 'Ruta desde cero · herramientas · brókeres verificados · fuentes oficiales', font=ImageFont.truetype(sans, 30), fill='#444b53')
d.rectangle([0, H - 18, W, H], fill='#c8892b')
im.save('public/og-default.png', optimize=True)
