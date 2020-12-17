import { Document } from "mongoose";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import CategorySchema from "../../model/CategorySchema";
import Category from "./Category";

@InputType()
class CategoryInput{
    @Field()
    name: string;
    
    @Field()
    description: string;
    
}

@Resolver(Category)
class CategoryResolver{

    @Query(() => [Category])
    async categories(){
        return await CategorySchema.find()
    }

    @Mutation(() => Category)
    async createCategory(@Arg("categoryInput") categoryInput: CategoryInput) {
        const { name, description } = categoryInput

        const category = await CategorySchema.create(categoryInput)
        return category;
    }

}

export default CategoryResolver