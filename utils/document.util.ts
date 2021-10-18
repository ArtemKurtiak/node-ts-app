import { Document, LeanDocument } from 'mongoose';
import { IUser } from '../models';

export const documentUtil = {
  normalizeDocument: (document: LeanDocument<Document & IUser>): Partial<IUser> => {

    const fieldsToRemove: string[] = ['password', '__v'];

    fieldsToRemove.forEach((field) => {
      delete document[field];
    });

    return document;
  }
};
