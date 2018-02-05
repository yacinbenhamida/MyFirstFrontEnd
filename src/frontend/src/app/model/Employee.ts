export class Employee {
id: number;
nom : String;
prenom :String;
nomar: String;
prenomar: String;
grade : String;
fonction : String;
dateNaiss : String;
structure: String;
cin : String;
cnrps : String;
     fullName(): string {
       return this.nom + ' ' + this.prenom+ ""+this.nomar+""+this.prenomar;
   }
    verif() : boolean {
        if(this.nom == undefined || this.prenom == undefined || this.nomar==undefined || this.grade == undefined || this.fonction == undefined || this.dateNaiss == undefined || this.structure == undefined || this.cin == undefined || this.cnrps == undefined)    
            { return false; }
        return true;
        }
    //constructor(id:number,nom:String,prenom :String,nomar: String,prenomar: String,grade : String,fonction : String,dateNaiss : String,structure: String,cin : String,cnrps : String){}
}