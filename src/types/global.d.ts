export {};

declare global {


interface IComment {
    CommentName: string;
    Comment: string;
    
}

interface Props {
    list: IComment;
    clearComment(taskNameToDelete: string): void;
  };

}


