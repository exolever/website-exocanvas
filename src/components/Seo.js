import React from 'react'
import Helmet from 'react-helmet'

const SEO = ({ postNode, postPath, postSEO, config }) => {
    let schemaOrgJSONLD;
    const title = postNode ? postNode.frontmatter.title : config.meta.title; // eslint-disable-line prefer-destructuring
    const description = postNode ? postNode.excerpt : config.meta.description;
    const image = postNode ? postNode.frontmatter.banner : config.meta.banner;
    const postURL = config.siteUrl + postPath;
  if (postSEO) {
    schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        '@id': postURL,
        'url': postURL,
        'name': title,
        'headline': title,
        'image': {
          '@type': 'ImageObject',
          'url': image,
        },
        'description': description,
        'datePublished': postNode.frontmatter.date,
        'dateModified': postNode.frontmatter.date,
        'author': {
          '@type': 'Person',
          "name": postNode.frontmatter.author,
        },
        "publisher": {
          '@type': 'Organization',
          "name": config.company,
          "logo": {
            '@type': 'ImageObject',
            "url": config.siteUrl + config.logo,
          },
        },
        "isPartOf": config.siteUrl,
        "mainEntityOfPage": {
          '@type': 'WebSite',
          '@id': config.siteUrl,
        },
      },
    ];
  } else {
    schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        '@id': config.siteUrl,
        'url': config.siteUrl,
        'name': title,
        'image': {
          '@type': 'ImageObject',
          'url': config.meta.banner,
        },
      },
    ];
  }
  const FacebookId = (<meta
    property="fb:app_id"
    content={config.intergrations.facebookId}
  />);
  const TwitterCreator = config.social.twitter ? (<meta
    name="twitter:creator"
    content={config.social.twitter}
  />) : null;
  const OgType = postSEO ? (<meta property="og:type" content="article" />) : null;
  return (
    <Helmet>
      <html lang={config.meta.language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      <meta property="og:locale" content={config.meta.language} />
      <meta
        property="og:site_name"
        content={title}
      />
      <meta property="og:url" content={postSEO ? postURL : config.siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {OgType}
      {FacebookId}
      {TwitterCreator}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={config.siteUrl} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO
