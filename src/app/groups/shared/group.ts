import { Members } from './members'
export class Group {
	$key: string;
	title: string;
	body: string;
	timeStamp: number;
	userId: string;
	id: string;
	members: Members;
}
