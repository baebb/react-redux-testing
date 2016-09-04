export const SAVE_COMMENT = 'SAVE_COMMENT';

export function saveComment(comment) {
    // console.log(comment)
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}