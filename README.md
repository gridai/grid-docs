# grid-documentation

## build locally

install python3.8, yarn
---

to develop docs locally, run

```sh
make serve-docs
```

when you push docs to master/merge a branch CI will automatically deploy changes to live website.
---

1. Docusaurus uses Remarkable to render markdown
2. mkapi for generating sdk docs
3. mkdocs_click for generating cli docs.
