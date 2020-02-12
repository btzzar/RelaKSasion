export interface Spot {
	name:string;
	type: string; 
	city: string;
	rating: number;
	imgPath:string;
	desc: string;
	date?: Date | null;
	status?: 'active' | 'expired' | null;
}