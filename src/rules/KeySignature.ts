export interface KeySignature {
  name: string;
  flats: number;
  sharps: number;
}

/** Major key 	Number
of sharps 	Sharp notes 	Minor key 	Enharmonic
equivalent
C major 	0 	  	A minor 	None
G major 	1 	F♯ 	E minor 	None
D major 	2 	F♯, C♯ 	B minor 	None
A major 	3 	F♯, C♯, G♯ 	F♯ minor 	None
E major 	4 	F♯, C♯, G♯, D♯ 	C♯ minor 	None
B major 	5 	F♯, C♯, G♯, D♯, A♯ 	G♯ minor 	C♭ major/A♭ minor
F♯ major 	6 	F♯, C♯, G♯, D♯, A♯, E♯ 	D♯ minor 	G♭ major/E♭ minor
C♯ major 	7 	F♯, C♯, G♯, D♯, A♯, E♯, B♯ 	A♯ minor 	D♭ major/B♭ minor */
