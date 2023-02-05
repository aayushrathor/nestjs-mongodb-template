import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogDocument = Blog & Document;

@Schema()
export class Blog {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop()
  createdBy?: string;

  @Prop({ required: true, default: Date.now() })
  createdOn: Date;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
