"use client"

import { Module, AgilityImage } from "@agility/nextjs"
import { ContentItem } from "@agility/nextjs"

interface IFeaturedProperties {
    title: string
    callToAction: string
    featuredProperties: ContentItem<PropertyInfo>[]
}

interface PropertyInfo {
    title: string;
    image: {
      label: string;
      url: string;
      target: string | null;
      filesize: number;
      pixelHeight: string;
      pixelWidth: string;
      height: number;
      width: number;
    };
    locationurl: {
      href: string;
      target: string;
      text: string;
    };
    location: string;
    propertyType: string;
  }
  

const FeaturedProperties: Module<IFeaturedProperties> = ({ module }) => {

    const { fields } = module
    const { featuredProperties } = fields

    return(
        <div className="w-full h-[400px] px-20 mb-10">
            <h2
                className="text-3xl font-bold text-center mb-10"
            >{fields.title}</h2>
            <div className="grid-cols-4 flex space-x-10 items-center justify-center">
                {
                    featuredProperties.map((property, index) => {
                        return <FeaturedProperty key={index} property={property} />
                    })
                }
            </div>
        </div>

    )
}


const FeaturedProperty = ({ property }: { property: ContentItem<PropertyInfo> }) => {
    return(
        <div className="border shadow-sm rounded-lg">
            <div className="w-full h-[300px] rounded-lg">
                <AgilityImage
                    src={property.fields.image.url}
                    alt={property.fields.image.label}
                    width={300}
                    height={300}
                    className="object-cover object-center w-full h-full rounded-t-lg "
                />
            </div>
            <div className="w-full h-[100px] p-2">
                <a  className="font-bold"href={property.fields.locationurl.href} target = {property.fields.locationurl.target}>{property.fields.locationurl.text}</a>
                <p>{property.fields.location}</p>
            </div>

        </div>
    )
}

export default FeaturedProperties