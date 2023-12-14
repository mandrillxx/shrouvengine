type BaseCharacter = Model & {
	Humanoid: Humanoid;
};

declare namespace JSX {
	interface IntrinsicElements {
		blureffect: JSX.IntrinsicElement<BlurEffect>;
	}
}
