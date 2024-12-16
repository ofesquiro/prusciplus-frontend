


function getUsarName() : string {
    let username : string;
    try{
        username =  localStorage.getItem('userName') as string;
    }catch(err : any){
        username = "";
    }
    return username;
}

function getEmail() : string {
    let email : string;
    try{ 
        email = localStorage.getItem('email') as string;
    }catch(err : any){
        email = "";
    }
    return email;
}

function getLevel() : number {
    let level : number;
    try{
        level =  Number(localStorage.getItem('level'));
    }catch(err : any){
        level = 0;
    }
    return level;
}

function isAdmin() : boolean {
    let isAdmin : boolean;
    try{
        isAdmin = localStorage.getItem('isAdmin') === "true";
    }catch(err : any){
        isAdmin = false;
    }
    return isAdmin;
}

function getToken() : string {
    let token : string;
    try{
        token = localStorage.getItem('Authorization') as string;
    }catch(err : any){
        token = "";
    }
    return token;
}

function setToken(token : string) : void {
    try{ 
        localStorage.setItem('Authorization', token);
    }catch(err : any){
        console.error(err);
    }
}


function setUserName(username : string) : void {
    try{
        localStorage.setItem('userName', username);
    }catch(err : any){
        console.error(err);
    }
}


function setEmail(email : string) : void {
    try{
        localStorage.setItem('email', email);
    }catch(err : any){
        console.error(err);
    }
}


function setLevel(level : number) : void {
    try{
        localStorage.setItem('level', level.toString());
    }catch(err : any){
        console.error(err);
    }
}


function setAdmin(isAdmin : boolean) : void {
    try{
        localStorage.setItem('isAdmin', isAdmin.toString());
    }catch(err : any){
        console.error(err);
    }
}


function deleteToken() : void {
    try{
        localStorage.removeItem('Authorization');
    }catch(err : any){
        console.error(err);
    }
}

function deleteUserName() : void {
    try{
        localStorage.removeItem('userName');
    }catch(err : any){
        console.error(err);
    }
}

function deleteEmail() : void {
    try{
        localStorage.removeItem('email');
    }catch(err : any){
        console.error(err);
    }
}

function deleteLevel() : void {
    try{
        localStorage.removeItem('level');
    }catch(err : any){
        console.error(err);
    }
}


function deleteAdmin() : void {
    try{
        localStorage.removeItem('isAdmin');
    }catch(err : any){
        console.error(err);
    }
}


function deleteAll() : void {
    try{
        deleteUserName();
        deleteEmail();
        deleteLevel();
        deleteAdmin();
    }catch(err : any){
        console.error(err);
    }
}

function setAll(username : string, email : string, level : number, isAdmin : boolean) : boolean {
    try{
        setUserName(username);
        setEmail(email);
        setLevel(level);
        setAdmin(isAdmin);
        return true;
    }catch(err : any){
        console.error(err);
        return false;
    }
}

function isAuthentificated() : boolean {
    let token : string = getToken();
    return token !== "";
}

export {getUsarName, getEmail, getLevel, isAdmin, getToken, setToken, setUserName, setEmail, setLevel, setAdmin , deleteToken, deleteUserName, deleteEmail, deleteLevel, deleteAdmin, deleteAll, setAll, isAuthentificated};
