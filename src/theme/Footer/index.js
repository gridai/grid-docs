import Link from "@docusaurus/Link";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import ThemedImage from "@theme/ThemedImage";
import clsx from "clsx";
import isInternalUrl from "@docusaurus/isInternalUrl";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useThemeConfig } from "@docusaurus/theme-common";

function FooterLink({ to, href, label, prependBaseUrlToHref, ...props }) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
  return (
    <Link
      className={`${styles.icon} footer__link-item`}
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      {href && !isInternalUrl(href) ? <span className={`${styles[label]}`}>{/* {label} */}</span> : label}
    </Link>
  );
}

function FooterLogo({ sources, alt, width, height }) {
  return <ThemedImage className="footer__logo" alt={alt} sources={sources} width={width} height={height} />;
}

function SimpleLinks({ links }) {
  return (
    <div className="footer__links">
      {links.map((item, key) => (
        <FooterLink {...item} key={key} />
      ))}
    </div>
  );
}

function isMultiColumnFooterLinks(links) {
  return "title" in links[0];
}

function Footer() {
  const { footer } = useThemeConfig();
  const { copyright, links = [], logo = {} } = footer || {};
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={clsx("footer", {
        "footer--dark": footer.style === "dark",
      })}
    >
      <div className="container container-fluid">
        <div className="row">
          <div className="footer__links text--left col-12 col-md-6">
            <SimpleLinks links={links} />
          </div>

          {(logo || copyright) && (
            <div className="footer__bottom text--right col-12 col-md-6">
              {logo && (logo.src || logo.srcDark) && (
                <div className="margin-bottom--sm">
                  {logo.href ? (
                    <Link href={logo.href} className={styles.footerLogoLink}>
                      <FooterLogo alt={logo.alt} sources={sources} width={logo.width} height={logo.height} />
                    </Link>
                  ) : (
                    <FooterLogo alt={logo.alt} sources={sources} />
                  )}
                </div>
              )}
              {copyright ? (
                <div
                  className="footer__copyright" // Developer provided the HTML, so assume it's safe.
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: copyright,
                  }}
                />
              ) : null}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
