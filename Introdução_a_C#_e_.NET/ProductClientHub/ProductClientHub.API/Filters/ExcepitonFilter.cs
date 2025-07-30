using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using ProductClientHub.API.Controllers;
using ProductClientHub.Communication.Responses;

namespace ProductClientHub.API.Filters
{
    public class ExcepitonFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            if(context.Exception is ProductClientHubException productClientHubException)
            {
                context.HttpContext.Response.StatusCode = (int)productClientHubException.GetHttpStatusCode();

                ObjectResult objectResult = new(new ResponseErrorMessagesJson(productClientHubException.GetErrors()));
                context.Result = objectResult;

            }
            else
            {
                ThrowUnkownError(context);
            }
            
        }
        private void ThrowUnkownError(ExceptionContext context)
        {
            context.HttpContext.Response.StatusCode = StatusCodes.Status500InternalServerError;
            context.Result = new ObjectResult(new ResponseErrorMessagesJson("Erro desconhecido."));
        }
    }
}
