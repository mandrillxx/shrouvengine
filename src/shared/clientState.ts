import { AnyEntity } from "@rbxts/matter";

export interface ClientState extends BaseState {
	character: BaseCharacter;
	playerId: AnyEntity | undefined;
	entityIdMap: Map<string, AnyEntity>;
}

export interface BaseState {
	debug: boolean;
	verbose?: boolean;
}
