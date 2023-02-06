using Microsoft.AspNetCore.Mvc;
using Mission04_belengv.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Mission04_belengv.controllers
{
    public class blahController : Controller
    {
        //Actions for Index view
        public IActionResult Index()
        {
            return View();
        }
        //Actions for GradeCalc view
        [HttpGet]
        public IActionResult GradeCalc()
        {
            return View();
        }
        [HttpPost]
        public IActionResult GradeCalc(CalculatorModel model)
        {
        
            return View();
        }

    }
}
