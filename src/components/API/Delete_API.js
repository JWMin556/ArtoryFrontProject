import axios from "axios";
const token = localStorage.getItem('Token');
const url = 'http://3.39.39.6:8080/api/stories/delete/{story-id}?storyId='
export const StoryDeleteApi =async (stroyId)=>{
    try {
        const response = await axios.delete(`${url}${stroyId}`,
        {
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ${token}`,
                'content-type': 'application/json',
        }}
    );
    console.log(response.data);
} 
catch (error) 
{
    console.error('Error fetching data:', error.response);
}
    //fetchData();
};
