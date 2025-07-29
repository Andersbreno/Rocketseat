
namespace ProductClientHub.API.Controllers
{
    [Serializable]
    internal class ProductClientHubException : Exception
    {
        public ProductClientHubException()
        {
        }

        public ProductClientHubException(string? message) : base(message)
        {
        }

        public ProductClientHubException(string? message, Exception? innerException) : base(message, innerException)
        {
        }
    }
}