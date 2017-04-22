import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../Project';

@Component({
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService) {
    this.projects = [];
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }
}