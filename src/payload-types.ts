/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    pages: Page;
    establishments: Establishment;
    modules: Module;
    commandations: Commandation;
    media: Media;
    icons: Icon;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    questions: Question;
  };
  locale: 'fr' | 'en';
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  role?: ('admin' | 'host') | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  settings: {
    slug: string;
  };
  metadata?: {
    title?: string | null;
    description?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "establishments".
 */
export interface Establishment {
  id: string;
  belongsTo?: (string | null) | User;
  slug: string;
  pageDetails: {
    welcomeMessage: {
      profileImage: string | Media;
      title: string;
      description: string;
    };
    securityPin: string;
  };
  metadata: {
    title: string;
    description: string;
  };
  modules?:
    | {
        module: string | Module;
        enabled?: boolean | null;
        secure?: boolean | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  belongsTo?: (string | null) | User;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "modules".
 */
export interface Module {
  id: string;
  belongsTo?: (string | null) | User;
  select: {
    modules: 'constructor' | 'external-link' | 'commandation' | 'wifi' | 'digicode';
  };
  title: string;
  icon: string | Icon;
  wifi?: {
    SSID: string;
    password: string;
    security: 'wep' | 'wpa' | 'wpa2' | 'wpa3';
    hidden?: boolean | null;
  };
  blocks?:
    | (
        | {
            title?: string | null;
            description?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'text-block';
          }
        | {
            image: string | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'image-block';
          }
        | {
            array?:
              | {
                  icon: string | Icon;
                  title: string;
                  overview?: string | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'icon-array';
          }
        | {
            title?: string | null;
            images?:
              | {
                  image: string | Media;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'gallery-block';
          }
      )[]
    | null;
  externalLink?: {
    url: string;
  };
  digicode?: {
    code: string;
    instructions?: string | null;
  };
  commandation?: {
    array?:
      | {
          title: string;
          titleIcon: string | Icon;
          commandationList?: (string | Commandation)[] | null;
          id?: string | null;
        }[]
      | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "icons".
 */
export interface Icon {
  id: string;
  alt: string;
  belongsTo?: (string | null) | User;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "commandations".
 */
export interface Commandation {
  id: string;
  belongsTo?: (string | null) | User;
  name: string;
  description: string;
  image: string | Media;
  address: string;
  phone?: string | null;
  website?: string | null;
  email?: string | null;
  rangePrice: '1' | '2' | '3' | '4';
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "questions".
 */
export interface Question {
  id: string;
  modules?: {
    isActivated?: boolean | null;
    title?: string | null;
    faqs?:
      | {
          title: string;
          content?:
            | (
                | {
                    text?: string | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType: 'paragraph';
                  }
                | {
                    image: string | Media;
                    caption?: string | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType: 'image';
                  }
              )[]
            | null;
          id?: string | null;
        }[]
      | null;
  };
  establishments?: {
    isActivated?: boolean | null;
    title?: string | null;
    faqs?:
      | {
          title: string;
          content?:
            | (
                | {
                    text?: string | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType: 'paragraph';
                  }
                | {
                    image: string | Media;
                    caption?: string | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType: 'image';
                  }
              )[]
            | null;
          id?: string | null;
        }[]
      | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}