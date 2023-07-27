import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller'
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewModel } from './review.model';

@Module({
  controllers: [ReviewController],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Review',
        schema: ReviewModel,
        collection: 'Review',
  
      }
    ])
  ]
})
export class ReviewModule {}
