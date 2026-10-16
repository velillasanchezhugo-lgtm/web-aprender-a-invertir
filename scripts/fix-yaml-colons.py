"""Utilidad editorial: entrecomilla en el frontmatter los elementos de lista y campos
de texto que contienen «: », para que YAML no los interprete como objetos."""
import re, glob
for f in glob.glob('src/content/**/*.md', recursive=True):
    s = open(f, encoding='utf-8').read()
    if not s.startswith('---\n'):
        continue
    fm, body = s[4:].split('\n---\n', 1)
    out = []
    for line in fm.split('\n'):
        m = re.match(r'^(\s+- )(.*)$', line)
        if m and ': ' in m.group(2) and not m.group(2).startswith(('"', "'")) and not re.match(r'^[a-zA-Z]+: ', m.group(2)):
            line = m.group(1) + '"' + m.group(2).replace('\\', '\\\\').replace('"', '\\"') + '"'
        m = re.match(r'^(\s*)(mistake|description|title|jurisdiction|evidenceNote|approach|horizon|time|knowledge|hook|takeaway|check|q|explain): (.*)$', line)
        if m and ': ' in m.group(3) and not m.group(3).startswith(('"', "'")):
            line = f'{m.group(1)}{m.group(2)}: "' + m.group(3).replace('"', '\\"') + '"'
        out.append(line)
    open(f, 'w', encoding='utf-8').write('---\n' + '\n'.join(out) + '\n---\n' + body)
