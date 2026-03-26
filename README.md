# Angular Blog Dashboard

A simple **Angular 22+ dashboard** for creating, managing, and previewing blog posts with images and rich text editing. Built with **@kolkov/angular-editor** for a WYSIWYG editor.

---

## Features

- **Dashboard Layout**: Sidebar navigation with tabs for Overview, Create Post, and Profile.  
- **Create Posts**: Add a new blog post with title, summary (rich text), and cover image.  
- **Overview**: View all posts with statistics like total posts and posts with images.  
- **Post Management**: Delete posts easily from the dashboard.  
- **Profile Tab**: Placeholder for future profile settings.  
- **Toast Notifications**: Shows success message after publishing a post.  
- **Responsive Design**: Clean layout with cards, sidebar, and flexible forms.  

---

## Tech Stack

- **Angular 22+**  
- **TypeScript**  
- **@kolkov/angular-editor** (rich text editor)  
- **Signals** (for reactive toast notifications)  
- **HTML & CSS** (custom styling)  

---

## Project Structure
src/
├─ app/
│ ├─ dashboard/
│ │ ├─ dashboard.html
│ │ ├─ dashboard.css
│ │ └─ dashboard.ts
│ └─ blog-service.ts
├─ assets/
│ └─ ae-icons/
│ └─ icons.svg
└─ main.ts


---

## Screenshots

<!-- Add screenshots here -->
![Dashboard Overview]<img width="1345" height="866" alt="dashboard overview" src="https://github.com/user-attachments/assets/edc44894-893a-49e5-9e0e-fe0e79b30674" />

![Create Post](<img width="1360" height="836" alt="image" src="https://github.com/user-attachments/assets/a0b62917-59be-4bf0-993e-1c5480626022" />
)

---

## Setup & Installation
-navigate to project
```bash
cd angular-blog-dashboard
```
- install dependencies
```Bash
npm install
```
-Run the Project
 ```bash
 ng serve
 ```
1. Clone the repository:

```bash
git clone https://github.com/yourusername/angular-blog-dashboard.git
```

Notes
Ensure src/assets/ae-icons/icons.svg exists for editor toolbar icons.
The project uses Angular standalone components for easier modularity.
Signals are used for toast notifications.
this project are localStorage based only for showing the data pass and integration only

Future Improvements
Add profile editing and avatar upload.
Implement pagination for many posts.
Add user authentication.


