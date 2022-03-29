# generate cli docs
import re
from pathlib import Path
# cli
from mkdocs_click._docs import make_command_docs
from grid.cli.__main__ import main

r = make_command_docs(prog_name="grid", command=main, depth=1, style="table")

# parse admonition
# https://github.com/Python-Markdown/markdown/blob/master/markdown/extensions/admonition.py

a = re.compile("!!! [w+]+[\n]*[.;w\[!\]()@:/.,\-\"*?\\']*[\n]{0,2}")

R = re.compile(r'(?:^|\n)!!! ?([\w\-]+(?: +[\w\-]+)*)(?: +"(.*?)")? *(?:\n|$)')
RE_SPACES = re.compile("  +")


def to_id(arg: str):
    return "{#" + arg.replace(".", "-") + "}"


INTRO = """---
sidebar_position: 2
title: GRID CLI REFERENCE
sidebar_label: GRID CLI REFERENCE
---

"""

with open("docs/cli/api.md", "w") as _cli:
    next(r)
    _cli.write(INTRO)
    for row in r:
        row = row.replace('_required', '')
        if row.startswith("### "):
            row = row.replace("### ", "## grid ")
        if row.startswith("#### "):
            row = row.replace("#### ", "### ")
        if '`g2.8xlarge,g3.16xlarge,' in row:
            row = row.replace(",", ", ")
        row = row.replace("<", "`<").replace(">", ">`")
        _cli.write(row + "\n")


# changelog
with open("docs/platform/changelog.md", "w") as w:
    with open("changelog/header.md") as f:
        w.write(f.read())
    for file in sorted(Path("changelog").glob("*.md"), reverse=True):
        if file.name != "header.md":
            with open(file) as f:
                w.write(f.read())
                w.write('\n')
