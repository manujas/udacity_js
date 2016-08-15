var bio = {
     "name": "Emanuel Arias",
     "role": "Full Stack Developer",
     "contacts": {
         "mobile": "123-123-123",
         "email": "lalla@asd.com",
         "github": "manujas",
         "twitter": "@manujas4",
         "location": "Ramos Mejía"
     },
     "welcomeMessege": "Hi there, Lorem ipsum dolor sit amet.",
     "skills": [
         "awesomeness", "grosisitud", "excelencia", "Perfect Pixel"
     ],
     "bioPic": "images/fry.jpg"
 };

var work = {
    "jobs": [
        {
            "employer": "Instituto Santa María del Rosario",
            "title": "Profesor de Informática",
            "location": "CABA, Argentina",
            "dates": "abril 2016 - actualmente",
            "description": "Me desempeño en los niveles de jardín, primaria y secundaria. En los últimos años de primaria y en secundaria priorizo la incorporación de nociones de las ciencias de la computación a través de la introducción de los estudiantes a la programación."
        },
        {
            "employer": "Freelancer",
            "title": "Desarrollador Web",
            "location": "Ramos Mejía, Argentina",
            "dates": "enero 2014 - actualmente",
            "description": "Desarrollo de aplicaciones y sitios web en distintas tecnologías especializándome en sistemas internos para empresas. Las tecnologías utilizadas depende de la problemática a resolver; trabajo cómodamente con stack MEAN, o con stacks basados en php."
        },
        {
            "employer": "Administradora de Monederos Electrónicos S.A",
            "title": "Desarrollador Web",
            "location": "CABA, Argentina",
            "dates": "marzo 2015 - marzo 2016",
            "description": "Desarrollo de sistema interno de la empresa encargado de la administración de clientes, stock, facturación y operación de equipos POS. PHP, MySQL, JS, JQUERY. Linux."
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "CONSUDEC",
            "location": "CABA, Argentina",
            "degree": "Profesor",
            "majors": [
                "Pedagogía",
                "Informática"
            ],
            "date": "2010 - 2015",
            "url": "http://consudec.edu.ar"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Sample 1 - lalala lala",
            "date": "2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": [
                "./images/project_1.jpg",
                "./images/project_2.png"
            ]
        }
    ]
};


// bio display function
bio.display = function() {
    // formatting bio items into html
    var formattedRole = HTMLheaderRole.replace("%data%", this.role);
    var formattedName = HTMLheaderName.replace("%data%", this.name);
    var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
    var formattedEmail = HTMLmobile.replace("%data%", this.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", this.bioPic);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessege);

    // inserting bio items into html
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedMsg);

    // add skills if any
    if (this.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill  = '';
        this.skills.forEach(function(skill) {
             formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }
};

// work display function
work.display = function() {
    // if there not info, do not do
    if (!this.jobs) {return;}

    this.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        // formatting jobs into html
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDate = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

        // adding jobs to the dom
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDate);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    });
};

// work display function
projects.display = function() {
    // if there not info, do not do
    if (!this.projects) {return;}

    $("#projects").append(HTMLprojectStart);

    this.projects.forEach( function(project) {
        // formatting pojects into html
        var formattedProjTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjDates = HTMLprojectDates.replace("%data%", project.date);
        var formattedProjDesc = HTMLprojectDescription.replace("%data%", project.description);

        // adding pojects to the dom
        $(".project-entry:last").append(formattedProjTitle);
        $(".project-entry:last").append(formattedProjDates);
        $(".project-entry:last").append(formattedProjDesc);

        // add img if any
        if (project.images.length > 0) {
            project.images.forEach( function(img) {
                var formattedImg = HTMLprojectImage.replace("%data%", img);
                $(".project-entry:last").append(formattedImg);
            });
        }
    });
};

education.display = function() {
    $("#education").append(HTMLschoolStart);

    if (!this.schools) {return;}

    this.schools.forEach( function(sch) {
        // formatting schools into html
        var formattedSchName = HTMLschoolName.replace("%data%", sch.name);
        var formattedSchDegree = HTMLschoolDegree.replace("%data%", sch.degree);
        var formattedSchDates = HTMLschoolDates.replace("%data%", sch.date);
        var formattedSchLocation = HTMLschoolLocation.replace("%data%", sch.location);
        var formattedSchMajor = HTMLschoolMajor.replace("%data%", sch.majors);

        // adding pojects to the dom
        $(".education-entry:last").append(formattedSchName);
        $(".education-entry:last").append(formattedSchDegree);
        $(".education-entry:last").append(formattedSchDates);
        $(".education-entry:last").append(formattedSchLocation);
        $(".education-entry:last").append(formattedSchMajor);
    });
};


// on load function to populate the resume.
(function() {
    bio.display();
    work.display();
    projects.display();
    education.display();
    $("#mapDiv").append(googleMap);
})();
