using System;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Application.Activities;
using System.Collections.Generic;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class ActivitiesController : ControllerBase
    {
        private readonly IMediator _mediator;
        
        public ActivitiesController(IMediator mediator) 
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> List()
        {
            return await _mediator.Send(new List.Query());
        }
    }
}