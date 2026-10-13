# Boyuan Zheng — Homepage

Source for [boyuanzheng010.github.io](https://boyuanzheng010.github.io/).
The site uses Jekyll and GitHub Pages, with a local homepage layout and CSS.

## Edit the homepage

- `index.md`: introduction.
- `_config.yml`: site metadata, photo, and social links.
- `_data/selected_work.yml`: the combined work list, in display order. Add a `summary` to a model entry when its contribution description is ready.
- `_layouts/homepage.html` and `_includes/`: page structure.
- `assets/css/`: styles.
- `assets/js/work-disclosure.js`: hover, click, and keyboard behavior for the work list; native click-to-expand still works without JavaScript.
- `assets/js/email-disclosure.js`: close-button, outside-click, and Escape handling for the email card; the address can also be revealed without JavaScript.
- `assets/img/`: portrait and research images.

When updating the current role, keep the introduction in `index.md`, the description
in `_config.yml`, and the person metadata in `_layouts/homepage.html` consistent.

## Build and preview

With a supported Ruby version and Bundler installed:

```sh
git clone https://github.com/boyuanzheng010/boyuanzheng010.github.io.git
cd boyuanzheng010.github.io
bundle config set --local path .bundle/gems
bundle install
bundle exec jekyll build
bundle exec jekyll serve --host 127.0.0.1
```

Open <http://127.0.0.1:4000/>. Generated files go to `_site/`.
The tracked `Gemfile` retains the existing GitHub Pages dependency bundle.
Building or serving locally does not publish changes.

### Existing local preview environment

This working copy also has an ignored, workspace-local Jekyll 3.10.0 environment
for the Mac's system Ruby 2.6. It uses Bundler 2.4.22 and a minimal preview Gemfile
(`jekyll`, `kramdown-parser-gfm`, and `webrick`) without installing anything globally.
If `.bundle/runtime` and `.bundle/Gemfile.preview` are present, run from this directory:

```sh
GEM_HOME="$PWD/.bundle/runtime" \
BUNDLE_GEMFILE="$PWD/.bundle/Gemfile.preview" \
BUNDLE_PATH="$PWD/.bundle/gems" \
ruby .bundle/runtime/bin/bundle exec jekyll build --trace
```

Replace `build --trace` with `serve --host 127.0.0.1` for a live preview.
This alternative validates the site with real Jekyll; it does not load the complete
GitHub Pages plugin bundle. `.bundle/` and `_site/` are local artifacts and must not
be included in source uploads. A fresh clone should use the standard setup above.

## Attribution

The original site is based on [Minimal Light](https://github.com/yaoyao-liu/minimal-light),
which builds on [pages-themes/minimal](https://github.com/pages-themes/minimal),
[orderedlist/minimal](https://github.com/orderedlist/minimal), and
[al-folio](https://github.com/alshedivat/al-folio). The original [CC0 license](LICENSE)
is retained. Older theme files remain in the repository for reference.
