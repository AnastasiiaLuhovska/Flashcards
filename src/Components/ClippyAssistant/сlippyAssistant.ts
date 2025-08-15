
export const clippyAssistant = (clippy:any) => {

    const speak = (text: string) => {
        if(!clippy) return
        clippy?.speak(text, true);
    };

    return { speak };
};