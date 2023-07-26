export interface RecipeProps {
    id: number;
    title: string;
    ingredients: string[];
    category: number;
    description: string;
    wines: number[];
    photo?: string;
}