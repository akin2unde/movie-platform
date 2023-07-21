

export class Util {
  static getSvg(name:string,isImage:boolean)
  {
    let iconPath: string = "../../assets/icons/";
    let imagePath: string = "../../assets/images/";
    return isImage?imagePath+name:iconPath+name;
  }

}
