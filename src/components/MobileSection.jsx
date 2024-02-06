import React from 'react'
import "./MobileSection.css"
import {Grid,Card,CardContent,CardMedia,Typography} from "@mui/material"
export const MobileSection = () => {
    const phones=[
        {
            name : "iphone16",
            descrption : "The iphone  16 is the latest version of iphones",
            image : "https://www.macworld.com/wp-content/uploads/2024/01/iphone-16-graphic-hole-punch-1.jpg?quality=50&strip=all",
        },
        {
            name : "iphone 16+",
            descrption : "iphone 16+ is the power house",
            image : "https://akm-img-a-in.tosshub.com/indiatoday/images/device/170479991915-pro-max-specs-1-800x800_one_to_one.jpg?VersionId=T39E9EAwm0ciDlaC007u.HyAKjW9jxf9",
            

        },
        {
            name : "iphone pro",
            descrption : "iphone pro is the power house",
            image : "https://idestiny.in/wp-content/uploads/2022/09/iPhone_14_Pro_Gold_PDP_Image_Position-1a_Avail__en-IN.jpg",
            

        },
        {
            name : "iphone pro max",
            descrption : "iphone pro max is the power house",
            image : "https://images.hindustantimes.com/tech/htmobile4/P36507/images/Design/146919-v6-apple-iphone-14-pro-max-mobile-phone-large-7.jpg",
            

        }
        //we can add more models here
    ]
  return (
    <Grid container spacing={4} className='mobilesection'>
        {phones.map((phone,index)=>(
            <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className='cardRoot'>
                    <CardMedia 
                    component="img" 
                    height="250" 
                    image={phone.image} 
                    alt={phone.name} />
                    <CardContent>
                        <Typography 
                        gutterBottom variant='h5' 
                        component="div" >{phone.name}</Typography>
                        <Typography variant='body2' color="text.secondary">{phone.descrption}</Typography>
                    </CardContent>
                </Card>
            </Grid>
         ))}
    </Grid>
  )
}
