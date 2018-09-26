export class PhraseService {
    public static convert(phrase: string, state: string[][] = [], index?: number): string[][] {
        const intercepted = phrase.split(',').map(x => x.trim());
        const newSize = Math.max(intercepted.length, state.length);
        const elemCount = state[0] ? state[0].length : 0;
        for (let i = 0; i < newSize; i++) {
            if (!state[i]) state[i] = new Array(elemCount);
            if (index === null || index === undefined) {
                state[i].push(intercepted[i]);
            } else {
                state[i][index] = intercepted[i];
            }
        }
        return state;
    }
}
