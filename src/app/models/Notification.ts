

export interface Notification  {
        NotificationType :NotificationType
        Title? :string;
        Message :string;
        okClick?:()=>void
        cancelClick?:()=>void
        onClose?:()=>void
}
export enum NotificationType{
        Success="Success",
        Error="Error",
        Warning="Warning",
        Info="Info"
}