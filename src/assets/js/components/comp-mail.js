class compEmpresas {
    constructor() {
        var clientId = '570751078097-c4gok9534217vsv4ophf51ve41ql9g6s.apps.googleusercontent.com';
        var apiKey = 'AIzaSyA5gtm4b3u7gfmquR4tSdFpOSEI3-t3jFg';
        var scopes = 'https://www.googleapis.com/auth/gmail.readonly ' +
            'https://www.googleapis.com/auth/gmail.send';

        function handleClientLoad() {
            gapi.client.setApiKey(apiKey);
            window.setTimeout(checkAuth, 1);


        }

        function checkAuth() {
            gapi.auth.authorize({
                client_id: clientId,
                scope: scopes,
                immediate: true
            }, handleAuthResult());
        }

        function handleAuthClick() {
            gapi.auth.authorize({
                client_id: clientId,
                scope: scopes,
                immediate: true
            }, handleAuthResult);
            return false;
        }

        function handleAuthResult(authResult) {
            if (authResult && !authResult.error) {
                loadGmailApi();
                $('#authorize-button').remove();
                $('.table-inbox').removeClass("hidden");
                $('#compose-button').removeClass("hidden");
            } else {
                $('#authorize-button').removeClass("hidden");
                $('#compose-button').on('click', function () {
                    $('#compose-modal').modal('show');
                    handleAuthClick();
                    //$("#").modal('show');
                });
            }
        }

        function loadGmailApi() {
            gapi.client.load('gmail', 'v1', displayInbox);
        }

        function displayInbox() {
            var request = gapi.client.gmail.users.messages.list({
                'userId': 'me',
                'labelIds': 'INBOX',
                'maxResults': 10
            });
            request.execute(function (response) {
                $.each(response.messages, function () {
                    var messageRequest = gapi.client.gmail.users.messages.get({
                        'userId': 'me',
                        'id': this.id
                    });
                    //messageRequest.execute(appendMessageRow);
                });
            });
        }



        function sendEmail() {

            $('#send-button').addClass('disabled');

            sendMessage(
                {
                    'To': $('#compose-to').val(),
                    'Subject': $('#compose-subject').val()
                },
                $('#compose-message').val(),
                composeTidy()
            );

            return false;
        }

        function composeTidy() {
            $('#compose-modal').modal('hide');

            $('#compose-to').val('');
            $('#compose-subject').val('');
            $('#compose-message').val('');

            $('#send-button').removeClass('disabled');
        }



        function sendMessage(headers_obj, message, callback) {
            var email = '';

            for (var header in headers_obj)
                email += header += ": " + headers_obj[header] + "\r\n";

            email += "\r\n" + message;

            var sendRequest = gapi.client.gmail.users.messages.send({
                'userId': 'me',
                'resource': {
                    'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
                }
            });

            return sendRequest.execute(callback);
        }





    }
}