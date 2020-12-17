import { Arg, Field, FieldResolver, InputType, Mutation, Query, Resolver, Root } from "type-graphql";
import CategorySchema from "../../model/CategorySchema";
import VideoSchema from "../../model/VideoSchema";
import Video from "./Video";

@InputType()
class VideoInput{
    @Field()
    name: string;

    @Field()
    description: string;

    @Field({ nullable: true })
    category: string;
}

@Resolver(of => Video)
class VideoResolver {

    @FieldResolver()
    async categoryData(@Root() video: any) {        
        return video.category && await CategorySchema.findById(video.category)        
    }

    @Query(() => [Video])
    async videos(){
        return await VideoSchema.find()
    }

    @Query(() => Video)    
    async video(@Arg("id") id: string){
        return await VideoSchema.findById(id)
    }

    @Mutation(() => Video)
    async createVideo(@Arg("videoInput") videoInput: VideoInput){
        return await VideoSchema.create(videoInput)
    }

}

export default VideoResolver