export interface Event {
	name:string;
	type: string; 
	city: string;
	rating: number;
	imgPath:string;
	desc: string;
	status?: 'done' | 'cancelled' | null;
}