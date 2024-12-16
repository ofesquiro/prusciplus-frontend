import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { IMovie } from '../Peli';
import { ObjectId } from 'mongodb';
import { PrusciPlusService } from '../PrusciPlus.Service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import {IActor} from '../Actor';
import { ActorData } from '../definitions/ServerResponse';
import { Categoria } from '../Categoria';


@Component({
  selector: 'app-add-film-form',
  templateUrl: './add-film-form.component.html',
  styleUrls: ['./add-film-form.component.css'],
  standalone: true,
  imports: [FormsModule,CommonModule, ReactiveFormsModule,MatSelectModule],
})


export class AddFilmFormComponent {
  public filmForm: FormGroup;
  public selectedVideo: File | null = null;
  public selectedImageFileName: string | null = null;
  public selectedImage: File | null= null;
  public selectedVideoFileName: string | null = null;

  public fullActorList: IActor[] = [];
  public fullCategorylist: Categoria[] = [];
  public searchText : string = ""
  public selectedCategories : Categoria[] = [];
  public selectedActors : IActor[] = [];
  
  public auxCategories : Categoria[] = [];
  constructor(private service: PrusciPlusService, private fb: FormBuilder) {
    this.filmForm = this.fb.group({
      name: new FormControl('', Validators.required),
      categoria: new FormControl(''),
      actors: new FormControl(''),
      image: new FormControl(null, Validators.required),
      video: new FormControl(null, Validators.required),
      searchText: new FormControl(''),
  });
    this.fullActorList = this.getActors();
    this.fullCategorylist = []

  }

  onImgChange(event: any) {
    if (event.target.files.length > 0) {
        this.selectedImage = event.target.files[0];
        this.selectedImageFileName = this.selectedImage!.name;
        this.filmForm.patchValue({
            image: this.selectedImage
        });
    }
  }
  onVideoChange(event: any) {
    if (event.target.files.length > 0) {
        this.selectedVideo = event.target.files[0];
        this.selectedVideoFileName = this.selectedVideo!.name;
        this.filmForm.patchValue({
            video: this.selectedVideo
        });
    }
  }

  getActors():IActor[]{
    let actors : IActor[] = [];
  
    this.service.getAllActors().actor.subscribe((actorData : ActorData) => {
      actors = actorData.users;
    })

    // sort by name ascending
    actors.sort((a, b) => a.nombreActor.localeCompare(b.nombreActor));

    return actors;
  }

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories():void{
    this.auxCategories = this.service.getAllCategories(); 
  }
  
  public toggleCategory(category: Categoria): void {
    if (this.isSelectedCategory(category)) {
      this.removeCategory(category);
    } else {
      this.selectCategory(category);
    }
  }

  public isSelectedCategory(category: Categoria): boolean {
    return this.selectedCategories.includes(category);
  }

  private selectCategory(category : Categoria){
    this.selectedCategories.push(category);
  }
  private removeCategory(category : Categoria){
    this.selectedCategories = this.selectedCategories.filter((cat) => cat !== category);
  }

  onSubmit(): void {
    try{
      let videoFile : File = this.selectedVideo!;
      let imageFile : File = this.selectedImage!;
      console.log(this.selectedImageFileName);
        console.log("submitted");
        const newFilm: IMovie = {
          _id: 4 as unknown as ObjectId,
          name: this.filmForm.value.name,
          comments: [],
          categoria: [Categoria.Accion],
          actors: [{nombreActor: "Adam Sandler", _id: 1 as unknown as ObjectId}],
          image: "http://localhost:3000/uploads/images/" + this.selectedImageFileName,
          video: "http://localhost:3000/uploads/videos/" + this.selectedVideoFileName,
        };
        


        this.service.addOneFilm(newFilm, videoFile, imageFile);
      }catch(err : any){
        console.error(err);
      }
    }
  }



