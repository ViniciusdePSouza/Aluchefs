export interface RecipeProps {
    id:         number;
    attributes: AttributesRecipeProps;
}

 interface AttributesRecipeProps {
    title:       string;
    description: string;
    createdAt:   Date;
    updatedAt:   Date;
    ingredients: string;
    thumb:       Thumb;
    wines:       Wines;
    category:    Category;
}

 interface Category {
    data: DAT;
}

 interface DAT {
    id:         number;
    attributes: DatumAttributes;
}

 interface DatumAttributes {
    name:         string;
    createdAt:    Date;
    updatedAt:    Date;
    description?: string;
}

 interface Thumb {
    data: Data;
}

 interface Data {
    id:         number;
    attributes: PurpleAttributes;
}

 interface PurpleAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

 interface Formats {
    thumbnail: Thumbnail;
}

 interface Thumbnail {
    name:   string;
    hash:   string;
    ext:    string;
    mime:   string;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}

 interface Wines {
    data: DAT[];
}
