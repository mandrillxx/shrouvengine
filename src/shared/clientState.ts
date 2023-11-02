export interface ClientState extends BaseState {
	character: BaseCharacter;
}

export interface BaseState {
	debug: boolean;
	verbose?: boolean;
}
