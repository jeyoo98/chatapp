import { PubSub } from '@google-cloud/pubsub'

const pubSubClient = new PubSub({projectId: "emulator"})

async function setupProfileCreateTopic() {
	try {
		const [tProfileCreate] = await pubSubClient.createTopic('profile-create')
		const [tProfileCreateSubscription] = await tProfileCreate.createSubscription('profile-create-subscription')
	} catch (error) {
		console.log(error)
	}
}

async function setupPubsub() {
	await pubSubClient.getTopics()

	await setupProfileCreateTopic()

	console.log(`Pubsub id ${process.env.PUBSUB_PROJECT_ID}running at ${process.env.PUBSUB_EMULATOR_HOST}`)
	pubSubClient.exit
	pubSubClient.close()
	process.exit()
}

setupPubsub()