# Personal Health

**Personal Health** is a web application developed using the **.NET (C#)** ecosystem. The project is designed as a personal health and wellness management platform, allowing users to track physical activities, nutrition, and medical records.

## 🛠️ Technologies & Tools

* **Language:** C# (.NET Framework/Core).
* **Frontend:** HTML5, CSS3, and JavaScript (organized in dedicated directories).
* **Server Configuration:** IIS (Internet Information Services) via `Web.config` files.
* **Package Management:** NuGet (as indicated by the `packages.config` file).

## 📂 Repository Structure

Based on the root directory, the project is organized as follows:

* **`/CSS`**: Stylesheets for the application's visual interface.
* **`/JS`**: Client-side scripts for interactivity.
* **`/imagenes`**: Image assets and resources.
* **`ProyectoFinalPrograIII.csproj`**: The primary Visual Studio project file that defines build configurations and dependencies.
* **`Web.config`**: Configuration settings for the ASP.NET runtime environment.

## 📋 Key Modules

The application features several functional modules for user health tracking:

* **Profile Management:** `datosPersonales.html` for handling user information.
* **Nutrition & Diet:** `alimentacion.html` and `merienda.html` for food tracking.
* **Physical Wellness:** `actividadesFisicas.html` for logging exercise and activities.
* **Medical Tracking:** `medicamentos.html` for managing prescriptions or medication schedules.

## 🔧 Setup & Installation

To run this project locally, it is recommended to use **Microsoft Visual Studio**:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Shianok/AppFiinal.git
    ```
2.  **Open the Project:** Load the `ProyectoFinalPrograIII.csproj` file in Visual Studio.
3.  **Restore Packages:** Use the NuGet Package Manager to install any missing dependencies listed in `packages.config`.
4.  **Run:** Start the project using the IIS Express debugger within Visual Studio.
