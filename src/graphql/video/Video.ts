import { Arg, Field, FieldResolver, Float, ObjectType, Root,  } from "type-graphql";
import CategorySchema from "../../model/CategorySchema";
import Category from "../category/Category";

@ObjectType({ description: "Video type with category with it" })
class Video {

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    _id:string;    

    @Field({ nullable: true })
    categoryData?: Category;

    @Field({ nullable: true })
    category?: string;
}

export default Video;