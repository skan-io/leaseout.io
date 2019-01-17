import React, {Fragment} from 'react';


/* eslint react/prop-types: off */

const SocialMeta =({title, appUrl, description})=> (
  <Fragment>
    <title>{title}</title>

    <meta name="author" content="leasegenius.com.au" />
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta
      name="keywords"
      content="Lease, Reals Estate, Landlord, Tenant"
    />
    <link rel="shortcut icon" href="favicon.png" />

    {/* Twitter Card data */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@nickmanks" />

    {/* Open Graph data */}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="leasegenius.com.au" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />

    <meta property="og:image" content={`${appUrl}share-img.png`} />
    <meta property="og:url" content={`${appUrl}`} />

    {/* Schema.org markup for Google+ */}
    <meta itemProp="name" content={title} />
    <meta itemProp="description" content={description} />
    <meta itemProp="image" content={`${appUrl}share-img.png`} />

    <meta name="robots" content="all" />
    <meta name="rating" content="General" />
    <meta name="copyright" content="&copy; leasegenius.com.au" />

    {/* Disables the ability for the pinterest plugin to save images */}
    <meta name="pinterest" content="nopin" />
  </Fragment>
);

export default SocialMeta;
