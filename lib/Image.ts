export interface StrapiImage {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: StrapiImageFormat[];
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
}

export interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string;
  url: string;
}

export interface Image {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const mapStrapiImage = (image: StrapiImage): Image => {
  if (image.provider === "cloudinary") {
    return {
      src: image.url,
      width: image.width,
      height: image.height,
      alt: image.alternativeText,
    };
  }
  return {
    src: `${process.env.STRAPI_CMS_URL}${image.url}`,
    width: image.width,
    height: image.height,
    alt: image.alternativeText,
  };
};
