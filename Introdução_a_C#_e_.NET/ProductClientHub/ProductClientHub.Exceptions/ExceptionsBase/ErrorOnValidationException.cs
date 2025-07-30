using System.Net;

namespace ProductClientHub.Exceptions.ExceptionsBase;
    public class ErrorOnValidationException : ProductClientsHubException
    {
        private readonly List<string> _erros;
        public ErrorOnValidationException(List<string> errorMessage) : base(string.Empty)
        {
            _erros = errorMessage;  
        }

        public override List<string> GetError() => _erros;

    public override HttpStatusCode GetHttpStatusCode() => HttpStatusCode.BadRequest;
}
